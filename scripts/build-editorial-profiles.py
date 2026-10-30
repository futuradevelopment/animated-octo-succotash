"""Build original, bounded owner-oriented context; never infer vehicle fitment."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'src/data'
DATA.mkdir(parents=True, exist_ok=True)
sources = [
    {'id':'epa-check-engine','title':'What To Do With the Check Engine Light','publisher':'U.S. Environmental Protection Agency','url':'https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100MHPD.TXT','checkedOn':'2026-10-30','kind':'public-agency'},
    {'id':'oregon-obd','title':'On-board Diagnostics Frequently Asked Questions','publisher':'Oregon Department of Environmental Quality','url':'https://www.oregon.gov/deq/vehicle-inspection/pages/obd.aspx','checkedOn':'2026-10-30','kind':'public-agency'},
    {'id':'nhtsa-ev-safety','title':'Electric and Hybrid Vehicles: Battery, Charging & Safety','publisher':'National Highway Traffic Safety Administration','url':'https://www.nhtsa.gov/vehicle-safety/electric-and-hybrid-vehicles','checkedOn':'2026-10-30','kind':'public-agency'},
    {'id':'nhtsa-ev-response','title':'Interim Guidance for Electric and Hybrid Vehicles Equipped With High Voltage Batteries','publisher':'National Highway Traffic Safety Administration','url':'https://www.nhtsa.gov/sites/nhtsa.gov/files/interimguide_electrichybridvehicles_012012_v3.pdf','checkedOn':'2026-10-30','kind':'public-agency'},
    {'id':'ford-warning-lamps','title':'Warning lamps and indicators — owner guidance','publisher':'Ford Motor Company','url':'https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G1624420&Uid=G1624418&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G539493&userMarket=USA&vFilteringEnabled=False&variantid=3091','checkedOn':'2026-10-30','kind':'manufacturer'},
]

common_limits = [
    'A stored code identifies a reported condition. It does not, by itself, identify a failed part or establish that the vehicle is safe to drive.',
    'Confirm the full code, reporting module, vehicle identification and manufacturer service information. A generic definition is not proof that every vehicle supports this code.',
    'The checks here preserve useful observations. They are not component tests, a repair procedure or a substitute for model-specific diagnosis.'
]
common_steps = [
    {'title':'Keep the complete scan report','body':'Record the code exactly, including any suffix, module name and current, pending or history status. Save freeze-frame information if your scanner provides it. Do not erase the evidence just to see whether the warning returns.'},
    {'title':'Match the vehicle and the situation','body':'Write down the model year, engine or powertrain, symptoms and conditions when the warning appeared. Include recent repairs, battery work or a refueling event as observations, not assumed causes.'},
    {'title':'Use the applicable diagnostic procedure','body':'Give the report to a qualified technician or manufacturer service department. The next test depends on the vehicle configuration, other codes and the module that reported the fault.'}
]
systems = {
    'powertrain':{
        'firstCheck':'From a safe parked position, note whether the warning is steady or flashing and whether the vehicle has rough running, power loss, overheating or another urgent warning.',
        'urgency':'check','urgencyLabel':'Assess the warning and symptoms',
        'safety':['A flashing engine warning needs prompt attention. Avoid continued driving when the vehicle runs badly; follow its owner manual and arrange assistance.','Stop safely for overheating, a red stop warning, smoke, fuel smell or loss of control. Do not run an engine in an enclosed space.'],
        'steps':common_steps,'nextSteps':['Request the manufacturer diagnostic path for the complete code and vehicle.','Ask what measurement supports a proposed repair and how the repair will be verified.'],
        'limitations':common_limits,'sourceIds':['epa-check-engine','oregon-obd']
    },
    'body':{
        'firstCheck':'Record the warning, affected feature and reporting module. A body-system code may need a scanner that can communicate with that specific module.',
        'urgency':'service','urgencyLabel':'Check the affected safety or convenience system',
        'safety':['Do not probe airbag or seat-belt pretensioner wiring, disconnect safety devices, or use a generic code description to decide that restraints are working.','If a safety-system warning is present, follow the exact vehicle manual and arrange qualified service.'],
        'steps':common_steps,'nextSteps':['Identify the body or restraint module named in the scan.','Request model-specific diagnosis before authorizing parts replacement.'],
        'limitations':common_limits,'sourceIds':[]
    },
    'chassis':{
        'firstCheck':'Note the brake, steering, stability or suspension warning shown with the code. A code number alone cannot establish whether braking or steering remains available.',
        'urgency':'service','urgencyLabel':'Assess braking and steering warnings first',
        'safety':['Stop safely if braking or steering feels abnormal or a red stop/brake warning calls for stopping. Arrange assistance rather than a diagnostic road test.','Do not work beneath an unsupported vehicle or bypass a chassis safety function.'],
        'steps':common_steps,'nextSteps':['Provide the chassis-module report and the exact dashboard message to a qualified workshop.','Use the manufacturer procedure for the identified module and model.'],
        'limitations':common_limits,'sourceIds':['ford-warning-lamps']
    },
    'network':{
        'firstCheck':'Save which modules can be reached and which communication codes each module reports. Record a recent flat battery or repair if one actually occurred.',
        'urgency':'service','urgencyLabel':'Identify the reporting modules',
        'safety':['A communication code is not proof that the named module needs replacement.','Do not bridge diagnostic pins, change module coding or disconnect high-voltage equipment using this reference. Stop safely if a critical vehicle function is affected.'],
        'steps':common_steps,'nextSteps':['Request a complete module scan, not just the engine-code list.','Have the vehicle-specific power, network and module diagnosis completed before replacement or programming.'],
        'limitations':common_limits,'sourceIds':[]
    }
}
profiles = {}
def add(codes, **profile):
    for code in codes:
        profiles[code] = profile.copy()

add(['P0300'],
    summary='P0300 is the generic reference for random or multiple-cylinder misfire detection. The warning behavior and other stored codes determine the next diagnostic step.',
    meaning='The reported condition is misfire across an unspecified or changing cylinder pattern. This result does not identify an ignition coil, injector or mechanical cause.',
    firstCheck='Check whether the engine warning is flashing and whether the vehicle is shaking or losing power. Park safely and arrange prompt assistance when those symptoms are present.',
    urgency='service',urgencyLabel='Prioritize rough running or a flashing warning',
    nextSteps=['Keep any cylinder-specific misfire codes with P0300.','Provide cold-start, idle, load and temperature observations to the technician.'],sourceIds=['oregon-obd'])
for cylinder in range(1,9):
    add([f'P030{cylinder}'],
        summary=f'The generic definition identifies misfire detected for cylinder {cylinder}. It does not specify which component caused the misfire.',
        meaning=f'The cylinder number belongs to the engine manufacturer’s cylinder numbering. Confirm that layout for the exact engine before interpreting a physical location.',
        firstCheck='Record rough running and whether the engine warning flashes. Do not keep running a badly misfiring engine to reproduce the code.',
        urgency='service',urgencyLabel='Assess misfire symptoms promptly',
        nextSteps=['Keep the complete set of misfire and mixture codes.','Ask the workshop to verify the engine-specific cylinder location and diagnostic evidence before replacement.'],sourceIds=['oregon-obd'])
for code,bank in [('P0420',1),('P0430',2)]:
    add([code],summary=f'{code} identifies a catalyst-efficiency result below the calibrated threshold for bank {bank}. It is a monitor result, not a replacement instruction.',
        meaning='The complete diagnostic context matters: other engine faults, sensor data and the manufacturer’s monitor criteria must be considered before choosing a repair.',
        firstCheck='Save this code with any misfire, mixture or sensor codes. Note whether the warning is steady or flashing and whether the engine is running normally.',
        nextSteps=['Ask which tests distinguish the reported monitor result from its cause.','Confirm the applicable bank and vehicle-specific procedure before authorizing catalyst or sensor replacement.'],sourceIds=['oregon-obd'])
for code,bank in [('P0171',1),('P0174',2)]:
    add([code],summary=f'The generic definition for {code} reports a lean-system condition for bank {bank}. A code alone cannot distinguish an air, fuel, measurement or other underlying fault.',
        meaning='Interpret the reported mixture condition alongside the full scan and operating conditions. The engine configuration determines which physical bank the definition refers to.',
        firstCheck='Record whether the warning appeared at idle, during acceleration or after a repair. Keep both bank codes if the scanner reports them.',
        nextSteps=['Provide the workshop with the scan’s saved operating conditions.','Request evidence for the repair instead of selecting a part from the code title.'],sourceIds=[])
for code,level in [('P0455','large'),('P0456','very small')]:
    add([code],summary=f'{code} reports a {level} evaporative-emissions leak condition. The code does not identify the leak location.',
        meaning='A model with a removable fuel cap has different owner checks from a capless system. Follow the fuel-filler instructions for the actual vehicle.',
        firstCheck='With the vehicle parked and engine off, check the normal fuel-cap closure only if the vehicle has a removable cap. Record whether the warning followed refueling.',
        safety=['Keep fuel vapors away from flames, sparks and improvised smoke tests. A noticeable fuel leak or strong fuel smell needs professional assessment.'],
        nextSteps=['Use the vehicle’s normal filler instructions; do not force a capless valve.','Arrange proper EVAP diagnosis if the warning persists.'],sourceIds=['oregon-obd'])
add(['P0128'],summary='P0128 reports coolant temperature below the thermostat-regulating temperature expected by the diagnostic monitor.',
    meaning='This temperature result is not, by itself, proof that the thermostat is the failed part. Vehicle operating data and the manufacturer procedure are needed.',
    firstCheck='Record ambient conditions, warm-up behavior and any temperature warning. Follow a separate overheating or red-stop warning immediately.',
    safety=['Do not remove a cooling-system cap while the system is hot. Keep clear of fans and moving belts.'],
    nextSteps=['Provide the saved temperature-related scan information to the workshop.','Ask for the applicable diagnostic test before a cooling-system repair.'],sourceIds=['ford-warning-lamps'])
add(['P0401'],summary='P0401 identifies exhaust-gas-recirculation flow reported as insufficient by the diagnostic monitor.',
    meaning='The flow result does not isolate a valve, passage, sensor or control fault. Those distinctions require the exact engine’s diagnostic procedure.',
    firstCheck='Record the full code list and whether there is rough running or loss of power. Avoid touching hot exhaust and EGR components.',
    nextSteps=['Provide the engine identity and the saved scan conditions.','Do not bypass the EGR system or choose a component solely from this title.'],sourceIds=[])
add(['P0011'],summary='P0011 reports camshaft timing over-advanced or system performance for the camshaft and bank identified in the definition.',
    meaning='A timing-related result needs the exact engine configuration and service procedure. It is not a direct diagnosis of a timing chain or control solenoid.',
    firstCheck='Record unusual engine noise, starting difficulty, warning lamps and recent service. Follow the owner manual for any oil-pressure or stop warning.',
    nextSteps=['Give the complete code list and recent service history to the technician.','Avoid disassembly or repeated running when mechanical noise or a critical warning is present.'],sourceIds=[])
add(['P0016'],summary='P0016 reports a crankshaft/camshaft correlation result outside the expected relationship for the bank and sensor identified in the definition.',
    meaning='The reported relationship must be checked with the engine-specific procedure. The code does not establish whether the cause is sensing, control or mechanical.',
    firstCheck='Record hard starting, unusual noise and any recent timing or engine work. Do not repeatedly crank an engine that sounds abnormal.',
    nextSteps=['Preserve related timing and sensor codes.','Use a qualified technician for timing-system testing.'],sourceIds=[])
add(['P0A80'],summary='P0A80 is a high-voltage battery-system reference. The complete scan, subcodes and exact hybrid or electric powertrain are essential to diagnosis.',
    meaning='The code label is not an owner repair procedure. Battery assessment and service require appropriate high-voltage training and vehicle-specific equipment.',
    firstCheck='Record the complete scan and dashboard message from a safe location. Follow any instruction to stop, and arrange qualified hybrid/EV service.',
    urgency='service',urgencyLabel='Qualified hybrid/EV diagnosis',
    safety=['Do not open the traction battery, touch high-voltage cables or attempt to isolate the high-voltage system from this guide.','Keep away from a damaged, smoking, hot or leaking traction battery and obtain emergency assistance when appropriate.'],
    nextSteps=['Use a workshop qualified for the actual high-voltage platform.','Supply all subcodes and warnings rather than only the five-character code.'],sourceIds=['nhtsa-ev-safety','nhtsa-ev-response'])
add(['U0100'],summary='U0100 reports lost communication with the engine/powertrain control module identified in the generic definition.',
    meaning='A module named in a lost-communication code is not automatically defective. The reporting module and the rest of the network scan matter.',
    firstCheck='Keep all module communication results and note whether the vehicle starts. Record a recent battery failure or repair only if it actually occurred.',
    nextSteps=['Ask for the vehicle-specific network and power-supply diagnosis.','Do not replace or program a controller based only on a communication-code title.'],sourceIds=[])

(DATA/'editorial-sources.json').write_text(json.dumps(sources,indent=2)+'\n')
(DATA/'diagnostic-guides.json').write_text(json.dumps({'systems':systems,'codes':profiles},indent=2)+'\n')
print(f'Wrote {len(systems)} system contexts, {len(profiles)} generic code contexts and {len(sources)} sources.')

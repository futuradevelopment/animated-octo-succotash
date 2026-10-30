// XML escaping retained from ECL's route utilities; route inventory is ErrHive-specific.
export function escapeXml(value:string){return value.replace(/[<>&'\"]/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;',"'":'&apos;','"':'&quot;'}[c]!));}

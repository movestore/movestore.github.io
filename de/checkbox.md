# Checkbox
Eine Checkbox dient dazu einen True/False Wert zu konfigurieren. Diese Option wird dem Benutzer in Form einer Checkbox dargestellt. 

## Beispiel

```json
{
  "id": "testCheckbox",
  "name": "Test Checkbox",
  "description": "Select an option.",
  "type": "CHECKBOX",
  "defaultValue": true
}
```

!> Das Feld `defaultValue` muss hier entweder `null`, `true` oder `false` sein. Es darf sich nicht um einen String wie z.B. `"False"` handeln.
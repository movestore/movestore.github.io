# Fixed or fallback auxiliary file

If the App developer can/wants to provide either fixed or fallback auxiliary files, these files must be defined as `providedAppFiles`. This category of the `appspec.json` defines the ID by which the auxiliary file can be addressed and its location in the App file bundle.


```
*appspec.json*

"providedAppFiles": [
  {
    "settingId": "aux_A",
    "from": "provided-app-files/aux_A/"
  }
]
```

For more detailed explanations, examples and local testing instructions please see the section [Auxiliary Files](auxiliary.md).
To enable users to upload their own files see [`USER_FILE`](appspec/current/settings/user_file.md)


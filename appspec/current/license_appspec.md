# License

For further use and publication, it is mandatory to specify which license agreement you want to use for your App in the [appspec.json](appspec.md) file. At the moment there are four options (see list below) from which the license key has to be entered. Please see our [License documentation](license.md) and consult [this website](https://choosealicense.com/) for help with choosing the most appropriate license for your App.

### List of license keys

- `GPL-3.0-or-later`: [The “GNU General Public License” version 3 or later](https://spdx.org/licenses/GPL-3.0-or-later.html#licenseText)
- `MIT`: [The “MIT License”](https://spdx.org/licenses/MIT.html#licenseText)
- `AGPL-3.0-or-later`: [The “GNU Affero General Public License” version 3 or later](https://spdx.org/licenses/AGPL-3.0-or-later.html#licenseText)
- `BSD-3-Clause`: [The “3-clause BSD License”](https://spdx.org/licenses/BSD-3-Clause.html#licenseText)

#### Example
```json
{
  "settings": [],
  "license": {
    "key": "MIT"
  }
}
```
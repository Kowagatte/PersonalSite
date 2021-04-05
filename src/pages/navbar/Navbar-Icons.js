import {
    faBook,
    faFolderOpen,
    faUserEdit
} from '@fortawesome/free-solid-svg-icons'

let icons = {
    "About Me": {
        "icon": faUserEdit,
        "href": "/am",
        "items": null
    },
    "Projects": {
        "icon": faFolderOpen,
        "items": {
            "Damocles": {
                "href": "/p/damocles/",
                "http_url": "https://api.github.com/repos/Kowagatte/Damocles-Client/commits"
            },
            "TopDownShooter": {
                "href": "/p/tds/",
                "http_url": "https://api.github.com/repos/Kowagatte/TDClient/commits"
            },
            "Raymond": {
                "href": "/p/raymond/",
                "http_url": "https://api.github.com/repos/Kowagatte/Raymond/commits"
            }
        }
    },
    "Devlog": {
        "icon": faBook,
        "href": "/d",
        "items": null
    }
}

export {icons};
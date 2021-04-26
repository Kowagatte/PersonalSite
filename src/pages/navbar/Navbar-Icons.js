import {
    faBook,
    faFolderOpen,
    faUserEdit
} from '@fortawesome/free-solid-svg-icons'

import {projects} from "../project/common/Projects";

let icons = {
    "About Me": {
        "icon": faUserEdit,
        "href": "/am",
        "items": null
    },
    "Projects": {
        "icon": faFolderOpen,
        "items": projects
    },
    "Devlog": {
        "icon": faBook,
        "href": "/d",
        "items": null
    }
}

export {icons};
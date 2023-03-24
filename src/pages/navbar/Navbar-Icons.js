import {
    faFolderOpen,
    faUserEdit,
    faScroll
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
    "Collection": {
        "icon": faScroll,
        "href": "/collection",
        "items": null
    }
}

export {icons};
import {
    faBook,
    faFolderOpen,
    faUserEdit
} from '@fortawesome/free-solid-svg-icons'

import {
} from '@fortawesome/free-brands-svg-icons'

let icons = {
    "About Me": {
        "icon": faUserEdit,
        "href": "/am/"
    },
    "Projects": {
        "icon": faFolderOpen,
        "href": "/p/"
    },
    "Devlog": {
        "icon": faBook,
        "href": "/d/"
    }
}

export {icons};

import {
    MdHomeFilled,
    MdOutlineExplore,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdHistory,
    MdOutlineWatchLater
} from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { AiOutlineLike } from 'react-icons/ai';

const guideSectionData = {
    sectionOne: [
        {
            text: "Home",
            path: "/",
            icon: <MdHomeFilled size={25} />

        },
        {
            text: "Explore",
            path: "/",
            icon: <MdOutlineExplore size={25} />

        },
        {
            text: "Subscriptions",
            path: "/",
            icon: <MdSubscriptions size={25} />

        }
    ],
    sectionTwo: [
        {
            text: "Library",
            path: "/",
            icon: <MdOutlineVideoLibrary size={25} />

        },
        {
            text: "History",
            path: "/",
            icon: <MdHistory size={25} />

        },
        {
            text: "Your videos",
            path: "/",
            icon: <RiVideoLine size={25} />

        },
        {
            text: "Watch later",
            path: "/",
            icon: <MdOutlineWatchLater size={25} />

        },
        {
            text: "Liked videos",
            path: "/",
            icon: <AiOutlineLike size={25} />

        },
    ]
}




export default guideSectionData;
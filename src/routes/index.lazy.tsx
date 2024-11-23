import { createLazyFileRoute } from '@tanstack/react-router'
import Ballot from "../Ballot";
import React from "react";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <Ballot start={()=>undefined} entries={[]} />
    )
}
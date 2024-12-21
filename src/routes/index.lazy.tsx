import { createLazyFileRoute } from '@tanstack/react-router'
import CurrentBallots from "../CurrentBallots";
import React from "react";

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <CurrentBallots />
    )
}
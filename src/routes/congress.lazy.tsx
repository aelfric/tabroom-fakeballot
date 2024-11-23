import { createLazyFileRoute } from '@tanstack/react-router'
import {CongressBallotStarted} from "../congress/CongressBallotStarted";

export const Route = createLazyFileRoute('/congress')({
    component: CongressBallotStarted,
})
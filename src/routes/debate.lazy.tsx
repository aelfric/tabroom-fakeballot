import { createLazyFileRoute } from '@tanstack/react-router'
import {DebateBallot} from "../debate/DebateBallot";

export const Route = createLazyFileRoute('/debate')({
    component: DebateBallot,
})
"use client";

import { useConvexAuth, useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "../convex/_generated/api";

export function SyncUser() {
    const { isAuthenticated } = useConvexAuth();
    const storeUser = useMutation(api.users.storeUser);

    useEffect(() => {
        if (isAuthenticated) {
            storeUser();
        }
    }, [isAuthenticated, storeUser]);

    return null;
}

import { writable } from "svelte/store";

export const loopStatusStore = writable({
    entityCompletedLoop: false,
    completedEntity: null,
});


export function markEntityLoopComplete(entityName) {
    loopStatusStore.set({
        entityCompletedLoop: true,
        completedEntity: entityName,
    });
}

export function resetLoopStatus() {
    loopStatusStore.set({
        entityCompletedLoop: false,
        completedEntity: null,
    });
}

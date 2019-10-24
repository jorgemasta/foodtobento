import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { LunchModel } from "../lunch"

/**
 * Model description here for TypeScript hints.
 */
export const DayModel = types
  .model("Day")
  .props({
    index: types.integer,
    lunch: LunchModel,
    nextDay: types.string,
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type DayType = Instance<typeof DayModel>
export interface Day extends DayType {}
type DaySnapshotType = SnapshotOut<typeof DayModel>
export interface DaySnapshot extends DaySnapshotType {}
import { collectedTasks } from "../constants";

export const collectedTaskExist = selectedProject =>
  collectedTasks.find(task => task.key === selectedProject);

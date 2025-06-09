import { motion } from "framer-motion";

export default function WorkflowDiagram() {
  return (
    <div className="min-h-64 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Interactive Workflow Diagram</h3>
        <p className="text-slate-400">Workflow visualization component</p>
      </motion.div>
    </div>
  );
}

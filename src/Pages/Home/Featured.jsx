import FeatureCard from "./FeatureCard";


const Featured = () => {
    return (
        <div className="p-5">
            <h2 className="text-4xl font-bold text-black py-5 text-center">Features </h2>
            <div className="grid grid-cols-4 gap-2">
            <FeatureCard title="Task Creation" content="Ability to create tasks easily and quickly.Task categorization and tagging for better organization and filtering" btnTag="Creation"></FeatureCard>
            <FeatureCard title="Task Prioritization " content="Tools for setting task priorities and assigning importance levels.Task scheduling and deadline management" btnTag="Prioritize"></FeatureCard>
            <FeatureCard title="Progress Tracking" content="Visual progress indicators or status updates for tasks and projects.Tracking of completed tasks, pending tasks, and overall project progress" btnTag="Progress"></FeatureCard>
            <FeatureCard title="Reminders and Notifications" content="Automated reminders for upcoming deadlines or overdue tasks.Notifications for task assignments." btnTag="Reminder"></FeatureCard>
            </div>
         
        </div>
    );
};

export default Featured;
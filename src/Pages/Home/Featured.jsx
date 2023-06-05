import FeatureCard from "./FeatureCard";


const Featured = () => {
    return (
        <div className="p-5">
            <h2 className="text-4xl font-bold text-black py-5 text-center">Features </h2>
            <div className="grid grid-cols-4 gap-2">
            <FeatureCard title="Task Create" content="Users can create tasks and added it to the database easily and quickly by completing a form. The added task will automatically appear on the view task table list." btnTag="Creating Task"></FeatureCard>
            <FeatureCard title="Task View " content="User can view all the tasks they added in the view task page with all the available details." btnTag="Viewing Task"></FeatureCard>
            <FeatureCard title="Task Update" content="User can update the task status from pending,working,in progress to completed. After clicking on 'mark as completed' button, the status will automatically updated to completed.  " btnTag="Updating Task"></FeatureCard>
            <FeatureCard title="Task Delete" content="Users can delete any completed or any task in other status.After the deletion the task will be removed from the task table list." btnTag="Deleting Task"></FeatureCard>
            </div>
         
        </div>
    );
};

export default Featured;
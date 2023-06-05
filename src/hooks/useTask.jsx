import { useQuery } from "@tanstack/react-query";


const useTask = () => {
    const { refetch, data: task = [] } = useQuery({
        queryKey: ["tasks"],
       
        queryFn: async ()=>{
            const response = await fetch("http://localhost:5000/tasks")
            // console.log(response)
            return response.json()
        },
});
return [task, refetch]
}
export default useTask;
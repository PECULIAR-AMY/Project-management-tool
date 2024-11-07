import Buttons from './Buttons.jsx';

export default function sideBar ({onStartAddProject}){
 return <aside className="w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72 rounded-r-xl">
    <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300 ">Your Projects</h2>
    <div>
    <Buttons onClick={onStartAddProject}>
        + Add Project
    </Buttons>
    </div>
    <ul></ul>
 </aside>       
    
}
 import Buttons from './Buttons.jsx';
import selectedProject from './SelectedProject.jsx';

 export default function sideBar ({onStartAddProject, projects, onSelectProject, selectedProjectId}){
 return <aside className="w-1/3 px-8 py-16 text-stone-50 bg-stone-900 md:w-72 rounded-r-xl">
   <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-300 ">Your Projects</h2>
   <div>
   <Buttons onClick={onStartAddProject}>
      + Add Project
  </Buttons>
    </div>
   <ul className='mt-8'>
        {projects.map(project =>{
      let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
       
      if (project.id === selectedProjectId) {
        cssClasses += ' bg-stone-800 text-stone-200'
      } else {
        cssClasses += ' text-stone-400'
      }

            return(
                <li key={project.id}>
                <button className={cssClasses}
                onClick={ () => onSelectProject(project.id)}>
                   {project.title}</button>
           </li>)}
            )
        }      
     </ul>
  </aside>       
    
 }


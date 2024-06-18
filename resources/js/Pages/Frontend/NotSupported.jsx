import MenuBar from './Components/MenuBar';
import not_found from '../../../images/not-found.svg';

const NotSupported = () => {
    return(
        <div>
            <MenuBar />

            <section className="flex flex-col items-center h-screen mt-8">
            <div className='mt-8'>
              <img src={not_found} className="w-2/5 mx-auto" alt="Not Found"/>
              <h3 className="text-center text-xl font-bold my-2">You are lost</h3>
              <p className="text-center">Go to 
                <a href={route('homepage')} className='bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white font-bold py-1 px-4 rounded mx-2'> Homepage</a> 
                Page
              </p>
            </div>
          </section>
            
        </div>
    );
}

export default NotSupported;
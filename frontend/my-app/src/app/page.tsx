import Searchbar from '../../components/Searchbar';
import Plane_list from '../../components/Plane_list';

export default function Home() {
  return (
    //HEADER
    <div>
      <div className='flex justify-center m-4'>
        <Searchbar/>
      </div>
      <div className="flex w-full text-black">
        <div className='flex flex-col w-full text-black gap-2 m-2'>
          <Plane_list/>
        </div>
        
      </div>
      <div>
      </div>
    </div>
    //FOOTER
  );
}

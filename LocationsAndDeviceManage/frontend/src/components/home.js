import Header from './header'
import AllDevices from './allDevices';
import { useNavigate  } from 'react-router-dom';
import './styles.css';


const Home = () => {


    const devicenavigate = useNavigate();

    const submit = async (e)=>  {
      devicenavigate("/AddLocation");
    }
    const edit = async (e)=>  {
        devicenavigate("/AddDevice");
    }
    const viewlocation = async (e)=>  {
        devicenavigate("/AllLocations");
    }
    const viewdevice = async (e)=>  {
        devicenavigate("/AllDevices");
    }

  return (
    <div className='Home'>
  
        <Header/>
        <hr></hr>
        <div class="row">
      <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">New Location</h5>
        <p class="card-text">By clicking add new location button you can add a new loaction</p>
        <form  onSubmit={submit}>
        <button type="submit" className="btn btn-primary">Add New location</button>
        </form>
        <form onSubmit={viewlocation}>
        <p class="card-text">Here you can see  all the locations</p>
        <button  type="submit" className="btn btn-primary">View All locations</button>
        </form>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">New Device</h5>
        <p class="card-text"></p> 
        <form onSubmit={edit}>
        <p class="card-text">By clicking add new device button you can add a new device</p>
        <button  type="submit" className="btn btn-primary">Add New Device</button>
        </form>
        <form onSubmit={viewdevice}>
        <p class="card-text">Here you can see  all the Devices</p>
        <button type="submit" className="btn btn-primary">View All Devices</button>
        </form>
      </div>
    </div>
  </div>
</div>  
{/* <AllDevices/> */}
    </div>

  )
}

export default Home
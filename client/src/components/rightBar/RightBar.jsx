import "./rightBar.scss";

export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>
            You may know
          </span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Anu Bhattacharya</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Anu Bhattacharya</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>

        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span style={{fontSize: "15px"}}>Arka Malik</span> Updated their profile photo
              </p>
            </div>
            <span style={{fontSize: "12px"}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span style={{fontSize: "15px"}}>Arka Malik</span> Updated their profile photo
              </p>
            </div>
            <span style={{fontSize: "12px"}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span style={{fontSize: "15px"}}>Arka Malik</span> Updated their profile photo
              </p>
            </div>
            <span style={{fontSize: "12px"}}>1 min ago</span>
          </div>

        </div>

        <div className="item">
          <span>Active Now</span>
          <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online"/>
                <span>Ritika Singh</span>
              </div>
              
          </div>
          <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online"/>
                <span>Ritika Singh</span>
              </div>
              
          </div>
          <div className="user">
              <div className="userInfo">
                <img src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="online"/>
                <span>Ritika Singh</span>
              </div>
              
          </div>
        </div>
       
      </div>
    </div>
  )
}

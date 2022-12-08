import style from './styles/Notification.css'
function Framechat(props){
    return(
        <div className="ochat">
            <h3 className="nameEmployee">{props.nameEmployee}</h3>  
            <p className="tnchat">Hello moi nguoi</p>
        </div>
    )
}
function Notification(){
    return(
        <div className="container container_noti">
            <div className="row row_noti">
                <div className="col-3 divbutton">
                    <button type="button" class="btn btn-primary">Tin nhắn</button><br></br>
                    <button type="button" class="btn btn-info">Thông báo chung</button>
                    
                </div>
                <div className="col-9 framechat">
                    <Framechat nameEmployee="Ha Viet Duc"></Framechat>
                    <Framechat nameEmployee="Ho Duc Hung"></Framechat>
                    <Framechat nameEmployee="Ngo Gia Phong"></Framechat>
                    <Framechat nameEmployee="Nguyen Minh My"></Framechat>
                </div>
                <div className="col-12 divback">
                    <button type="button" class="btn btn-danger backbutton">Trở về</button>
                </div>
            </div>
            
                
        </div>
    )
}

export default Notification;
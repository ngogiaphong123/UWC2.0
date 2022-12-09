import React from "react";
import '../styles/Chat.css';
export default function ComingMsg({ chil }) {
    return (
        <div className="cm_msg">
            <div className="cm_msg_ctn">
                <div className="txt__msg">
                    {chil}
                </div>
            </div>
        </div>
    );
}

export function SendingMsg({ chil }) {

}
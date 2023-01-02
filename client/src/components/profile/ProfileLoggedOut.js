import React from "react";
import ProfilePerk from "./ProfilePerk";
import classes from "../../pages/Profile.module.scss";
import {faBookmark, faPhone, faNewspaper, faWifi, faEllipsis} from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
class ProfileLoggedOut extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        const perks = [{
            icon: faBookmark,
            title: 'Access to orders history',
            text: 'Manage your orders with a single tap'
        },{
            icon: faPhone,
            title: 'Professional support 24/7',
            text: 'Our support buddys are eager to help in any moment'
        },{
            icon: faNewspaper,
            title: 'News about our recents products and offers',
            text: 'Don’t worry. We’re sending only one email every month!'
        },{
            icon: faWifi,
            title: 'Free WiFi in our Drink&Buy stops',
            text: 'Scan a QR code from receipt and enter your account credentials'
        },{
            icon: faEllipsis,
            title: 'And much more...',
            text: ''
        }];
        return (
            <section>
                <h2 className={classes.profile__greeting}>Join to our coffee family</h2>
                <h3>With account you will get:</h3>
                <div className={classes.profile__perks}>
                    {perks.map((perk, idx) =>
                        <ProfilePerk key={idx} icon={perk.icon} title={perk.title}>{perk.text}</ProfilePerk>
                    )}
                </div>
                <div className={classes['profile__sign-box']}>
                    <h2>Ready to start?</h2>
                    <div className={classes.hero}></div>
                    <div className={classes['profile__sign-box__butons']}>
                        <Button variant={'fill'}>Sign Up</Button>
                        <Button variant={'outline'}>Log In</Button>
                    </div>
                </div>
                <div className={classes.profile__padding}></div>
            </section>
        );
    }
}export default ProfileLoggedOut;
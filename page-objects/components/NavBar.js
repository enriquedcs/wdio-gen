import Base from '../Base'

class NavBar extends Base {
    get homeIcon() {
        return $('#feed-tab-icon')
    }
    get myNetworkIcon() {
        return $('#mynetwork-tab-icon')
    }
    get jobsIcon() {
        return $('#jobs-tab-icon')
    }
    get messagingIcon() {
        return $('#messaging-tab-icon')
    }
    get notificationIcon() {
        return $('#notifications-tab-icon')
    }
    get navPhotoIcon() {
        return $('.nav-item__profile-member-photo')
    }
    get postActivity() {
        return $('.nav-settings__view-activity-link')
    }

    //.nav-settings__view-activity-link

    clickPostActivity(){
        this.navPhotoIcon.waitForExist()
        this.navPhotoIcon.click()
        this.postActivity.waitForExist()
        this.postActivity.click()
    }

    navBarIsVisible() {
        this.navTab.waitForExist()
    }

    signInIsVisible(){
        this.signingBtn.waitForExist()
    }

}

export default new NavBar
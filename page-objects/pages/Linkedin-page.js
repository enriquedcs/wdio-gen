import Base from '../Base'
import { browser } from '../../config'

class LinkedinPage extends Base {
    get postActivity() {
        return $('button:nth-of-type(3)')
    }
    get firstAnalytics() {
        return $('div:nth-of-type(1) > .Elevation-2dp.ember-view.feed-shared-update-v2 .content-analytics-entry-point.ember-view')
    }
    get showMoreBtn() {
        return $('.ca-social-gesture-highlights__expand-action.pl2.pr2.pt5.t-16.t-black.t-normal')
    }
    get closeModal() {
        return $('.artdeco-button.artdeco-button--2.artdeco-button--circle.artdeco-button--muted.artdeco-button--tertiary.artdeco-modal__dismiss.ember-view')
    }


    clickFirstAnalytics(){
        this.postActivity.waitForExist()
        this.postActivity.click()
        this.firstAnalytics.waitForExist()
        this.firstAnalytics.click()
        this.showMoreBtn.waitForExist()
        this.showMoreBtn.click()
    }

    submitForm(){
        this.submitBtn.click()
    }

}

export default new LinkedinPage
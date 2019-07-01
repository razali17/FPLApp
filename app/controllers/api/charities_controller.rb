class Api::CharitiesController < ApplicationController
  def show
    @charities = Charity.all
    @tests = Charity.joins(:goals).select('charities.id, charities.name, charities.desc, charities.image')
    @dailyObj = Goal.where(charity_id: 1)
    @habitatObj = Goal.where(charity_id: 2)
    @parkObj = Goal.where(charity_id: 3)
    @princessObj = Goal.where(charity_id: 4)
    @sickkidsObj = Goal.where(charity_id: 5)
    render :json => {
      charities: @charities,
      tests: @tests,
      dailyObj: @dailyObj,
      habitatObj: @habitatObj,
      parkObj: @parkObj,
      princessObj: @princessObj,
      sickkidsObj: @sickkidsObj
    }
  end
end
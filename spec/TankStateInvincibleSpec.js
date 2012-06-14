describe("TankStateInvincible", function () {
  var eventManager, tank, state;
  
  beforeEach(function () {
    eventManager = new EventManager();
    tank = new Tank(eventManager);
    state = new TankStateInvincible(tank);
  });
  
  it("state duration", function () {
    spyOn(eventManager, 'fireEvent');
    state.setStateDuration(3);
    var EVENT = {'name': TankStateInvincible.Event.END, 'tank': tank};
    state.updateStateTimer();
    expect(eventManager.fireEvent).not.toHaveBeenCalledWith(EVENT);
    state.updateStateTimer();
    expect(eventManager.fireEvent).not.toHaveBeenCalledWith(EVENT);
    state.updateStateTimer();
    expect(eventManager.fireEvent).not.toHaveBeenCalledWith(EVENT);
    state.updateStateTimer();
    expect(eventManager.fireEvent).toHaveBeenCalledWith(EVENT);
  });
  
  it("#update", function () {
    spyOn(state, 'updateStateTimer');
    state.update();
    expect(state.updateStateTimer).toHaveBeenCalled();
  });
});

import alt from '../alt';

class FooterActions {
  constructor() {
    // getTopCharactersSuccess(payload) {
    //   this.dispatch(payload);
    // }
    //
    // getTopCharactersFail(payload) {
    //   this.dispatch(payload);
    // }

    // Equivalent to this...
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
  }

  getTopCharacters() {
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        this.actions.getTopCharactersSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);

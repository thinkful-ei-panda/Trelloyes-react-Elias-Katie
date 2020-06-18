import React, { Component } from "react";
import List from "./List";
import STORE from "./store.js";
import "./App.css";

function omit(obj, keyToOmit) {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);

  return {
    id,
    title: 'Random Card '+id.substring(0,2),
    content: 'lorem ipsum',
  }
}
class App extends Component {
  state = {
    store: STORE,
  };

  handleDeleteCard = (cardId) => {
    const {lists, allCards} = this.state.store;
    
    const newLists = lists.map(list => (
    {...list, cardIds: list.cardIds.filter(
      id => id !== cardId
      )
    }));

    const newCards = omit(allCards, cardId);
    
    this.setState({
      store: {
        lists:newLists, 
        allCards:newCards
      } 
    })
  };

  
  /* ~~~~~ Attempt at creating handle   DElete~~~~~
  this.state.lists = this.state.lists.filter(id => id !== uniqueId)
 */
    /* DeleteItem = (item) => { const newItems = 
      this.state.shoppingItems.filter(itm => 
      itm !== item) 
      this.setState( {shoppingItems: newItems} ) 
    }
    handleCheckItem = (item) => { 
      const newItems = this.state.shoppingItems.map(itm => 
       { if (itm === item) { itm.checked = !itm.checked } 
       return itm }) 
       this.setState({ shoppingItems: newItems }) } 
  }
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


  handleAddRandomCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })
    
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  };

  render() {
    const { store } = this.state
    console.log(store)
    return (
      <main className="App">

        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>

        <div className="App-list">

           {store.lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete = {this.handleDeleteCard}
              onClickAdd = {this.handleAddRandomCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;

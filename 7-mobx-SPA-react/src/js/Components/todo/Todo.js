import { autorun, computed, observable } from "mobx"
import React from 'react';

export default class Todo extends React.Component{
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    super()
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}
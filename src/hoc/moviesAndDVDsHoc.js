import React, { Component } from "react";
import axios from "../axios";

export default (WrappedComponent, type) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: []
      };
      this.getList = this.getList.bind(this);
    }

    componentDidMount() {
      this.getList();
    }

    async getList() {
      const queryEntries = new URLSearchParams(this.props.location.search);
      const queryObj = [];
      for (const query of queryEntries.entries()) {
        queryObj[0] = {
          [query[0]]: query[1]
        };
      }
      const { category } = queryObj[0];
      try {
        const res = await axios.get(`/lists/${type}/${category}.json`, {
          headers: { "Content-Type": "application/json" }
        });
        this.setState(() => ({
          list: res.data
        }));
      } catch (err) {
        console.log(err);
      }
    }

    render() {
      const { list } = this.state;
      return <WrappedComponent list={list} {...this.props} />;
    }
  };
};

import React, { Component } from "react";
import Select from "react-dropdown-select";
import styled from "@emotion/styled";

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multi: props.multi,
      selectValues: props.selectValues,
      searchBy: "value",
      clearable: props.clearable,
      handle: true,
      labelField: "value",
      valueField: "value",
      color: "#222",
      keepSelectedInList: true,
      closeOnSelect: props.closeOnSelect,
      dropdownPosition: "auto",
      direction: "ltr",
      dropdownHeight: "200px",
      separator: true,
    };
  }

  noDataRenderer = () => {
    return (
      <p style={{ textAlign: "center" }}>
        <strong>Ooops!</strong> No data found
      </p>
    );
  };

  render() {
    return (
      <div className={this.props.className}>
        <div>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <StyledSelect
              // handleKeyDownFn={({ event, state, props, methods, setState }) => {
              //   const { cursor } = state;
              //   const escape = event.key === 'Escape';
              //   const enter = event.key === 'Enter';
              //   const arrowUp = event.key === 'ArrowUp';
              //   const arrowDown = event.key === 'ArrowDown';
              //   const tab = event.key === 'Tab' && !event.shiftKey;
              //   const shiftTab = event.shiftKey && event.key === 'Tab';

              //   if ((arrowDown || tab) && cursor === null) {
              //     return setState({
              //       cursor: 0
              //     });
              //   }

              //   if (arrowUp || arrowDown || shiftTab || tab) {
              //     event.preventDefault();
              //   }

              //   if (escape) {
              //     this.dropDown('close');
              //   }

              //   if (enter) {
              //     const currentItem = methods.searchResults()[cursor];
              //     if (currentItem && !currentItem.disabled) {
              //       if (props.create && valueExistInSelected(state.search, state.values, props)) {
              //         return null;
              //       }

              //       methods.addItem(currentItem);
              //     }
              //   }}
              placeholder={this.props.placeholder}
              color={this.state.color}
              searchBy={this.state.searchBy}
              separator={this.state.separator}
              clearable={this.state.clearable}
              searchable={this.state.searchable}
              create={this.state.create}
              keepOpen={this.state.forceOpen}
              dropdownHandle={this.state.handle}
              dropdownHeight={this.state.dropdownHeight}
              direction={this.state.direction}
              multi={this.state.multi}
              values={"" || this.props.selectValues}
              labelField={this.state.labelField}
              valueField={this.state.valueField}
              options={this.props.options}
              dropdownGap={5}
              keepSelectedInList={this.state.keepSelectedInList}
              onDropdownOpen={() => undefined}
              onDropdownClose={() => undefined}
              onClearAll={() => undefined}
              onSelectAll={() => undefined}
              onChange={this.props.onChange}
              noDataLabel="No matches found"
              closeOnSelect={this.state.closeOnSelect}
              noDataRenderer={
                this.state.noDataRenderer
                  ? () => this.noDataRenderer()
                  : undefined
              }
              dropdownPosition={this.state.dropdownPosition}
              itemRenderer={
                this.state.itemRenderer
                  ? (item, itemIndex, props, state, methods) =>
                      this.itemRenderer(item, itemIndex, props, state, methods)
                  : undefined
              }
              inputRenderer={
                this.state.inputRenderer
                  ? (props, state, methods) =>
                      this.inputRenderer(props, state, methods)
                  : undefined
              }
              optionRenderer={
                this.state.optionRenderer
                  ? (option, props, state, methods) =>
                      this.optionRenderer(option, props, state, methods)
                  : undefined
              }
              contentRenderer={
                this.state.contentRenderer
                  ? (innerProps, innerState) =>
                      this.contentRenderer(innerProps, innerState)
                  : undefined
              }
              dropdownRenderer={
                this.state.dropdownRenderer
                  ? (innerProps, innerState, innerMethods) =>
                      this.dropdownRenderer(
                        innerProps,
                        innerState,
                        innerMethods
                      )
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const StyledSelect = styled(Select)`
  ${({ dropdownRenderer }) =>
    dropdownRenderer &&
    `
		.react-dropdown-select-dropdown {
			overflow: initial;
		}
	`}
`;

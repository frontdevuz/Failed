import React, { useState } from "react";
// import Select from "react-select";
import Container from "./../../../components/container/container";
import { Search } from "../../../icons/icons";
import "./homeselect.scss";
import Hometitle from "./../../../components/hometitle/hometitle";

import { Select } from "antd";

const country = [
  { value: "Россия", label: "Россия" },
  { value: "Узбекистан", label: "Узбекистан" },
  { value: "США", label: "США" },
  { value: "Франсия", label: "Франсия" },
];
const level = [
  { value: "Простой", label: "Простой" },
  { value: "Средний", label: "Средний" },
  { value: "Высокий", label: "Высокий" },
  { value: "Експерт", label: "Експерт" },
];
const study = [
  { value: "IT науки", label: "IT науки" },
  { value: "IT Enginnering", label: "IT Enginnering" },
  { value: "Математика и Физика", label: "Математика и Физика" },
  { value: "Литература и английский", label: "Литература и английский" },
];
export default function Homeselect() {
  const [selectedOption, setSelectedOption] = useState(null);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <React.Fragment>
      <section
        className="select"
      >
        <Container>
          <p className="select__title">Найти Университет</p>
          <div className="select__container">
            <div className="select__item">
              <Select
                showSearch
                placeholder="Страна"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={country}
              />
            </div>
            <div className="select__item">
              <Select
                showSearch
                placeholder="Степь"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={level}
              />
            </div>
            <div className="select__item">
              <Select
                showSearch
                placeholder="Наука"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={study}
              />
            </div>
            <div className="select__search">
              <Search />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}

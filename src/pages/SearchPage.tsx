import { useCallback, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { HeroeContext } from "../context/HeroeContext";

import '../css/search.css'
import { SearchList } from "../components/SearchList";
import { Title } from "../components/Title";

export const SearchPage = () => {
  const { t } = useTranslation();

  const { search } = useLocation();
  const history = useHistory();

  const { q = "" } = queryString.parse(search);

  const [searchText, setSearchText] = useState(q);

  const { searchHero } = useContext(HeroeContext);

  const handlenChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
  },
    []
  );

  const handlenSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchText !== '' ) {
           
           history.push(`?q=${searchText}`);
      }

    },

    [history, searchText]
  );

  const heroFilter = searchHero(q?.toString()!);

  return (
    <div>
      <Title title = {t('searchAHero')} subTitle = {t('WhoIsYourFavoriteHero')}/>
      <div className="cont-search">
        <form onSubmit={handlenSubmit} className="form-search">
          <input
            type="search"
            placeholder={t("search")}
            value={searchText!}
            autoComplete="off"
            autoFocus
            onChange={handlenChange}
          />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div>
          {heroFilter.map((items) => (
            <SearchList items={items} key={items._id} />
          ))}
        </div>
      </div>
      
      <div>

        {heroFilter.length === 0 && q !== "" && (
          <p className="empty-hero">
            {t("noHero")} <span className="text">{q}</span>{" "}
          </p>
        )}

      </div>
    </div>
  );
};

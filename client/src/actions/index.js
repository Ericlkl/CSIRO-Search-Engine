import { addSearchHistory,resetSearchHistory } from './searchHistoryActions'
import { fetchResults } from './resultActions'
import { updateSearchKeyword } from './searchKeyActions';
import { updateXMLResult } from './xmlActions'
import { 
    filterContinent,
    filterCountry,
    filterGender,
    filterReset,
    filterSortBy,
    filterStatus
} from './filterAction'

export { 
    fetchResults,
    filterContinent,
    filterCountry,
    filterGender,
    filterReset,
    filterSortBy,
    filterStatus,
    addSearchHistory,
    resetSearchHistory,
    updateSearchKeyword,
    updateXMLResult
}
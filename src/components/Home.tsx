import * as React from "react";
import getPlayers from "../dataFile/get-players"
import TableHeader from "./TableHeader";

export const Home = (props: any) => {

    const [playerList, setPlayerList] = React.useState([] as any);
    const [isLoading, setIsLoading] = React.useState(true);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = React.useState(1);
    const [startIndex, setStartIndex] = React.useState((currentPage - 1) * itemsPerPage);
    const [endIndex, setEndIndex] = React.useState(startIndex + itemsPerPage);
    const [players, setPlayers] = React.useState([] as any);
    const [filter, setFilter] = React.useState([] as any);
    const [filterValue, setFilterValue] = React.useState(localStorage.getItem('filter') || 'All');
    const [searchKey, setSearchKey] = React.useState('' as any);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };
    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };

    const sortPlayers = (key: any) =>{
        const sortedPlayers = playerList.sort((a:any,b: any)=>{
            return a[key] > b[key] ? 1 : -1;
        })
        setPlayerList([...sortedPlayers]);
    }

    React.useEffect(()=>{
        let filterList : any = ['All','batsman','bowler','allRounder','wicketKeeper'];
        setFilter(filterList);
    },[])

    React.useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true);
                    const players = await getPlayers();
                    setTimeout(() => {
                        setPlayers(players);
                        const startIndex = (currentPage - 1) * itemsPerPage;
                        const endIndex = startIndex + itemsPerPage;
                        const currentPageData = players.slice(startIndex, endIndex);
                        if(filterValue==='All' && searchKey === ''){
                            setPlayerList(currentPageData)
                        }
                        else {
                            let list = currentPageData.filter((list:any)=>{
                                return  list.type === filterValue || searchKey!=='' ?  list.name.toLowerCase().includes(searchKey.toLowerCase()) : null;
                            })
                            setPlayerList(list);
                        }
                        setIsLoading(false);
                    }, 500);

                } catch (error) {
                    console.error('Error while fetching and processing players:', error);
                    setPlayerList([]);
                }
            }
        )();

    }, [currentPage,filterValue, searchKey])




    return (
        <>
            <div>
                 <TableHeader filter={filter} filterValue={filterValue} 
                    searchKey={searchKey} setSearchKey={setSearchKey}
                    setFilterValue={setFilterValue} setFilter={setFilter} 
                        sortPlayers={sortPlayers} handlePageChange={handlePageChange} 
                            players={players} playerList={playerList} handleNextButton={handleNextPage} 
                                handlePrevButton={handlePrevPage} currentPage={currentPage} endIndex={endIndex} 
                                    isLoading={isLoading} />
            </div>
        </>
    );
}

export default Home;

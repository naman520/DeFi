import React, { useEffect, useState } from 'react';
import { Network, Alchemy } from 'alchemy-sdk';
import { useTable } from 'react-table';
import './TokenBal.css'; // Ensure you import the CSS file

const settings = {
  apiKey: "_Lg2a_CIxvNJvs2mD3n3Y4V9RyfmBz8s", // Replace with your actual Alchemy API key
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const TokenBalance = () => {
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    const fetchNftData = async () => {
      try {
        const nftList = [
          '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', // Bored Ape Yacht Club
          '0x9388c64ff14f0e0ecb3ec2dd7613b4430aaf119e', // Milady Maker
          '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB', // CryptoPunks (wrapped)
          '0x7Be8076f4EA4A4AD08075C2508e481d6C946D12b', // OpenSea Collection
        ];

        const data = await Promise.all(nftList.map(async (address) => {
          const tokenId = '1'; // Example token ID, you might want to loop through different token IDs
          const metadata = await alchemy.nft.getNftMetadata(address, tokenId);
          const floorPrice = await alchemy.nft.getFloorPrice(address);
          // Add more API calls as needed for other data points

          return {
            name: metadata.title || `NFT at ${address.substring(0, 6)}...${address.substring(address.length - 4)}`,
            floorPrice: `${floorPrice.openSea.floorPrice || 'undefined'} ETH`,
            change24h: `${floorPrice.openSea.floorPriceChangePercentage || 'undefined'}%`,
            marketCap: 'N/A', // Market cap needs to be calculated separately if available
            volume24h: 'N/A', // Volume needs to be fetched/calculated if available
            sales24h: 'N/A', // Sales needs to be fetched/calculated if available
            owners24h: 'N/A', // Owners change needs to be fetched/calculated if available
          };
        }));

        setNftData(data);
      } catch (error) {
        console.error('Error fetching NFT data:', error);
      }
    };

    fetchNftData();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'NFT',
        accessor: 'name',
      },
      {
        Header: 'Floor Price',
        accessor: 'floorPrice',
      },
      {
        Header: '24h%',
        accessor: 'change24h',
      },
      {
        Header: 'Market Cap',
        accessor: 'marketCap',
      },
      {
        Header: '24h Volume',
        accessor: 'volume24h',
      },
      {
        Header: '24h Sales',
        accessor: 'sales24h',
      },
      {
        Header: '24h Owners',
        accessor: 'owners24h',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: nftData });

  return (
    <div className="table-container">
      <table {...getTableProps()} className="table">
        <thead className="bg-green-100 text-green-900">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="table-header"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={"bg-green-300"} {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="table-cell"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TokenBalance;

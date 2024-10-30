'use client';
import { useEffect, useState } from 'react';
import { readContract, toTokens } from 'thirdweb'
import { getBidersContractByAddress } from '@/utils/contracts';
import { biddersContractAddress } from '@/utils/contractsAddress';
import AuctionCard from './AuctionCard';

function CurrentAuctions() {
    const [auctions, setAuctions] = useState<any[]>([])
    const [reload, setReload] = useState(false)
    const getAuctions = async () => {
        let i = 1
        const fetchedAuctions: any[] = [] // Temporary array to store fetched events
        
        while (true) {
            const auction = await readContract({
                contract: getBidersContractByAddress(biddersContractAddress),
                method: 'auctions',
                params: [BigInt(i)]
            })
            // Check if the value at index 2 of the event is 0 (stop condition)
            if (Number(toTokens(auction[7], 18)) === 0) {
                break
            }
            
            // Add the event to the local array
            fetchedAuctions.push(auction)
            i++
        }

        // Update the state after fetching all events
        setAuctions(fetchedAuctions)
    }

    useEffect(() => {
        getAuctions()
    }, [reload])

    return ( 
        <div className='flex flex-col gap-10 w-full mt-10'>
            <h1 className='font-bold text-2xl text-primary'>Current Auctions</h1>
            <div className='flex flex-col w-full'>
                <div className='flex flex-wrap gap-10 justify-center align-middle items-center'>
                    {auctions.map((auction, index) => (
                        
                         <AuctionCard key={index} auction={auction} auctionId={index+1}/>
                       
                       
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurrentAuctions

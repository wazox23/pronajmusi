"use client"

import { useEffect, useState } from 'react';
import { getRelatedAds } from '@/app/lib/ads/getRelatedAds';
import { Categories, LocationKeys, AdTypes, Ad } from "@/app/constants/contants";
import AdItem from '@/app/components/AdItem';
import AdSlider from '@/app/components/AdSlider';

export default function RelatedAds({
    category,
    location,
    type,
    title,
}: {
    category: Categories;
    location: LocationKeys;
    type: AdTypes;
    title: string;
}){

    const [relatedAds, setRelatedAds] = useState<Ad[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        try {
            setLoading(true);
            const data: Ad[] = await getRelatedAds(category, location, type, title);
            setRelatedAds(data);
        } catch (error) {
            setLoading(false);
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [category, location, type, title]);

    return (
        <div className="w-full flex items-center">
            {
                loading && 
                <div>123</div>
            }
            {
                !loading && 
                <AdSlider items={relatedAds} />
            }
        </div>
    )
}
import styled from "styled-components";
import categoriesData from "../data/categoryMocks.json";
import { useState } from 'react';
import { useRecoilState } from "recoil";
import { materialState } from "@/store/Auth/material";

const mockData = categoriesData;

interface Props {
    listTitle: string
}

const CatetoryList = (props: Props) => {
    const [material, setMaterial] = useRecoilState(materialState);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { listTitle } = props

    const handleCategoryChange = (e: any) => {
        setSelectedCategory(e.target.value);
        const newMaterial = {
            ...material,
            categoryID: e.target.value,
        }
        setMaterial(newMaterial);
        console.log(newMaterial);
    };

    return (
        <Container>
            <h3>{ listTitle }</h3>
            <form>
                <SelectContainer id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="" disabled={selectedCategory !== ''}>--選択してください--</option>
                    {mockData.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </SelectContainer>
            </form>
        </Container>
    );
};

export default CatetoryList;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const SelectContainer = styled.select `
    width: 100%;
    border: 1px solid #9A9A9A;
    border-radius: 5px;
    padding: 5px;
`;


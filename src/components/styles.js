import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-family: Verdana;
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
    padding-bottom: 4px;
    line-height: 42px;
    border-radius: 5px;
    background-color: #D2CC16;
    color: green;
`;

export const AlvenariaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: 20px;
    width: 350px;
    height: 350px;
    border-radius: 20px;
    justify-content: start;
    align-items: center;
    font-family: Verdana;
    font-size: 14px;
    color: black;
    background-color: #D2CC16;
    padding-top: 10px;
    padding-bottom: 10px;

`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    font-family: Verdana;
    font-size: 15px;
`;
    

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
`;

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 9px;
    margin-right: 20px;
    width: 350px;
    height: 350px;
    border-radius: 20px;
    justify-content: start;
    align-items: center;
    font-family: Verdana;
    font-size: 14px;
    background-color: #D2CC16;
    padding-top: 10px;
    padding-bottom: 20px;

`;

export const Estilo = styled.p`
    font-family: Verdana;
    font-size: 12px;
    color: green;
    text-align: center;
`;

export const Title = styled.span`
    font-family: Verdana;
    font-size: 18px;
    font-weight: bold;
    color: green;
    align-items: center;
    text-align: center;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: 150px;
    margin-bottom: 15px;
    padding: 10px 10px;
    justify-content: start;
    align-items: center;
    width: 700px;
    height: 350px;
    font-family: Verdana;
    font-size: 12px;
    color: green;
    border-radius: 6px;
    background-color: #D2CC16;

`;

export const Button = styled.button`
    border: none;
    border-radius: 3px;
    background-color: green;
    color: #D2CC16;
    width: 100px;
    height: 25px;
    margin-top: 3px;
    margin-left: 3px;
`;

export const Option = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
`;
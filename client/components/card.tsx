import { FC, useMemo } from 'react'
import styles from '../../styles/Card.module.css'
import { Card } from 'antd';
import useAuth from '../swr/hooks/auth.hook';

interface CardProps {
    children: JSX.Element
}

const CustomCard: FC<CardProps> = ({ children }) => {
  const { data, isLoading, error } = useAuth();
  const stringifiedData = useMemo(() => JSON.stringify(data), [data]);

  if (isLoading)
    return (
      <Card>isLoading...</Card>
    )
  if (error)
    return (
      <Card>{ JSON.stringify(error) }</Card>
    )

  return (
    <Card>
      <div>
        card
        { children }
        data: { stringifiedData }
      </div>
    </Card>
  )
}

export default CustomCard

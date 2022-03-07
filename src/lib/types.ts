import { Dispatch, SetStateAction } from 'react';

export interface ImageHolder {
	image: string;
	image_alt?: string;
}

export interface Post extends Partial<ImageHolder> {
	category?: string;
	id: string;
	title: string;
	summary: string;
	date: string;
	content: string;
}

export interface SortedPost extends Post {
	prevPost?: SortedPost;
	nextPost?: SortedPost;
}

export interface FullPost extends Omit<Post, 'category'> {
	category: Category;
}

export interface Category extends Partial<ImageHolder> {
	id: string;
	name: string;
	description: string;
	image?: string;
	image_alt?: string;
}

export interface LinkInfo {
	to: string;
	label: string;
}

export type Runnable = () => void;
export type SetState<T> = Dispatch<SetStateAction<T>>;

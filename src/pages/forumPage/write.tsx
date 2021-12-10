import React from 'react';
import Select from '@ui/select';
import Textarea from '@ui/textarea';
import Input, { InputErrorMessage } from '@ui/input';
import Button from '@ui/button';
import { useForm } from 'react-hook-form';
import { TForumForm } from '@model/auth';
import { toast } from 'react-hot-toast';

const optionList = [
  {
    name: 'general',
    value: 'general',
  },
  {
    name: 'tip',
    value: 'tip',
  },
  {
    name: 'bug',
    value: 'bug',
  },
  {
    name: 'learn',
    value: 'learn',
  },
];
const ForumWritePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TForumForm>({ mode: 'onChange' });
  // const { createPost } = useCreatePost();
  const submit = handleSubmit((data) => {
    const { title, content, tag: name } = data;
    const newPost = {
      title,
      content,
      isLiked: false,
      tag: { name, color: 'red' },
    };
    console.log('질문 생성:', newPost);
    toast.success('새로운 질문 작성');
  });
  return (
    <div className={'forum-detail-page'}>
      <form className={'forum-detail'} onSubmit={submit}>
        <Input
          placeholder={'질문 제목'}
          invalid={!!errors.title}
          {...register('title', { required: '필수입니다' })}
        />

        <div className={'tag-select'}>
          <label htmlFor="tag">태그: </label>
          <Select id="tag" {...register('tag', { required: '필수입니다.' })}>
            {optionList.map((i, index) => (
              <option key={index} value={i.value}>
                {i.name}
              </option>
            ))}
          </Select>
        </div>
        <Textarea
          className={'content'}
          placeholder={'질문 내용'}
          invalid={!!errors.content}
          {...register('content', { required: '필수입니다.' })}
        />
        <div className={'h-32'}>
          {!isValid && (
            <InputErrorMessage>모든 항목이 필수입니다</InputErrorMessage>
          )}
        </div>
        <div style={{ textAlign: 'right' }}>
          <Button disabled={!isValid} type={'submit'}>
            질문 작성
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ForumWritePage;

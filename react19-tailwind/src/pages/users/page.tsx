import { Suspense, useActionState, useOptimistic, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import { noop } from '../../utils/noop.util';
import { User } from '../../shared/api';
import { CreateUserAction } from './actions';
import { useUsers } from './use-users';

export function CreateUserForm({
    createUserAction,
}: {
    createUserAction: CreateUserAction;
}) {
    const [state, dispatch] = useActionState(createUserAction, {
        email: '',
        // error: null,
    });

    const [optimisticState, setOptimisticState] = useOptimistic(state);
    const form = useRef<HTMLFormElement>(null);
    return (
        <form
            className="flex gap-2"
            ref={form}
            action={(formData: FormData) => {
                setOptimisticState({ email: '' });
                dispatch(formData);
                form.current?.reset();
            }}
        >
            <input
                name="email"
                type="email"
                className="border p-2 rounded"
                defaultValue={optimisticState.email}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400"
                type="submit"
            >
                Add
            </button>
            {/* {optimisticState.error && (
                <div className="text-red-500">{optimisticState.error}</div>
            )} */}
        </form>
    );
}

export const UserCard = ({
    user,
    deleteUserAction,
}: {
    user: User;
    deleteUserAction: any;
}) => (
    <div className="border p-2 m-2 rounded bg-gray-100 flex gap-2">
        {user.email}

        <form className="ml-auto">
            <input type="hidden" name="id" value={user.id} />
            <Link
                to={`/${user.id}/tasks`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
            >
                Tasks
            </Link>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto disabled:bg-gray-400"
                formAction={deleteUserAction}
            >
                Delete
                {/* {state.error && (
                <div className="text-red-500">
                    {state.error}
                </div>
            )} */}
            </button>
        </form>
    </div>
);

export function UsersList({
    deleteUserAction,
    useUsersList,
}: {
    useUsersList: () => User[];
    deleteUserAction: any;
}) {
    const users = useUsersList();
    return (
        <div className="flex flex-col">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                    deleteUserAction={deleteUserAction}
                />
            ))}
        </div>
    );
}

export const UsersPage = () => {
    const { useUsersList, createUserAction, deleteUserAction } = useUsers();

    return (
        <>
            <CreateUserForm createUserAction={createUserAction} />
            <ErrorBoundary
                fallbackRender={(e) => (
                    <div className="text-red-500">
                        Something went wrong:{JSON.stringify(e)}{' '}
                    </div>
                )}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <UsersList
                        // deleteUserAction={deleteUserAction}
                        // useUsersList={useUsersList}
                        deleteUserAction={noop}
                        useUsersList={() => [
                            {
                                id: '1',
                                email: 'example@gmail.com',
                            },
                            {
                                id: '2',
                                email: 'dfgdfgdfg@gmail.com',
                            },
                        ]}
                    />
                </Suspense>
            </ErrorBoundary>
        </>
    );
};
